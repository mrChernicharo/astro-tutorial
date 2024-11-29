export function verifyAuth() {
    const token = sessionStorage.getItem("melosoft-token");
    const expires = sessionStorage.getItem("melosoft-token-expires");

    if (
        ["/dashboard/"].includes(location.pathname) &&
        (!token || !expires || Number(expires) < Date.now())
    ) {
        location.assign("/");
    }

    if (
        ["/", "/login/", "/signup/"].includes(location.pathname) &&
        token &&
        expires
    ) {
        location.assign("/dashboard/");
    }

    console.log("user authenticated ✅", location);
    const userId = sessionStorage.getItem("user-id");
    const username = sessionStorage.getItem("user-name");

    return { userId, username };
}

export async function fetchFn<T>(url: string, body: object) {
    return fetch(url, { method: "GET" }).then((res) => res.json()) as Promise<{
        payload: T | null;
        err: null | string;
    }>;
}

export async function postFn<T>(url: string, body: object) {
    return fetch(url, {
        method: "POST",
        headers: [["Content-Type", "application/json"]],
        body: JSON.stringify(body),
    }).then((res) => {
        console.log(res);
        return res.json();
    }) as Promise<{
        payload: T | null;
        err: null | string;
    }>;
}

export async function putFn<T>(url: string, body: object) {
    return fetch(url, {
        method: "PUT",
        headers: [["Content-Type", "application/json"]],
        body: JSON.stringify(body),
    }).then((res) => res.json()) as Promise<{
        payload: T | null;
        err: null | string;
    }>;
}

export async function deleteFn<T>(url: string, body: object) {
    return fetch(url, { method: "DELETE" }).then((res) =>
        res.json()
    ) as Promise<{ payload: T | null; err: null | string }>;
}

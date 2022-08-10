import { API_ENDPOINT } from ".";

export const getUsers = async () => {
    const response = await fetch(`${API_ENDPOINT}/user`);
    const user = await response.json();

    return user;
};

export const addNewUser = async (newUsername, newEmail, newPassword) => {
    const response = await fetch(`${API_ENDPOINT}/user/signup`, {
        method: "POST",
        body: JSON.stringify({
            username: newUsername,
            email: newEmail,
            password: newPassword
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    const newUser = await response.json();

    return newUser;
};

export const updateUser = async (id, newUsername, newEmail, newPassword) => {
    const response = await fetch(`${API_ENDPOINT}/user/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            newUsername,
            newEmail,
            newPassword
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    return response.status;
}
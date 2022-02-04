export default {
    title (state, title) {
        state.title = title;
    },

    users (state, users) {
        state.users = users;
    },

    addUser (state, {id, name, latitude, longitude}) {
        state.users.push({
            id,
            name,
            latitude,
            longitude,
        });
    },
}

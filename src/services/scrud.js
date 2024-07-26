const search = ({ path }) => {
    return fetch(`/api/${path}`)
};

const remove = ({ path }) => {
    return fetch(`/api/${path}`, { method: 'DELETE' })
};

export { search, remove };
function UserList({ users }) {
    return (
        <>
            <h1>List of users</h1>
            {users && users.map((user) => {
                return (
                    <div key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                )
            })}
        </>
        )
}

export default UserList

export async function getStaticPorps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)

    return {
        props: {
            users: data,
        }
    }
}

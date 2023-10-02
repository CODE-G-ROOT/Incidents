import { NextUIProvider } from "@nextui-org/react";

function Menu_Users() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <NextUIProvider>
                <div>
                    <div className="contianer_title">
                        <h1>Users</h1>
                        <hr />
                    </div>
                    <div className="container_list_menu">
                        <div className="container_list">
                            <ul>
                                <li>ALL</li>
                                <li>ID</li>
                                <li>ROL</li>
                                <li>NAME</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </NextUIProvider>
        </>
    )
}

export default Menu_Users
import { NextUIProvider } from "@nextui-org/react";

function Navbar_incidences_ALL() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <NextUIProvider>
                <div>
                    <div className="container_list_menu">
                        <div className="container_list">
                            <ul>
                                <li>ID</li>
                                <li>STATUS</li>
                                <li>CATEGORY</li>
                                <li>TYPE</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </NextUIProvider>
        </>
    )
}

export default Navbar_incidences_ALL
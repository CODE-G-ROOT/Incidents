import { NextUIProvider } from "@nextui-org/react";

function Navbar_incidences_EQUIPMENT() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <NextUIProvider>
                <div>
                    <div className="container_list_menu">
                        <div className="container_list">
                            <ul>
                                <li>AREA</li>
                                <li>ROOM</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </NextUIProvider>
        </>
    )
}

export default Navbar_incidences_EQUIPMENT
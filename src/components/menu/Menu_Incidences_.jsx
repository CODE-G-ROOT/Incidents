import { NextUIProvider } from "@nextui-org/react";

function Menu_Incidences() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <NextUIProvider>
                <div>
                    <div className="contianer_title">
                        <h1>Incidences</h1>
                        <hr />
                    </div>
                    <div className="container_list_menu">
                        <div className="container_list">
                            <ul>
                                <li>ALL</li>
                                <li>EQUIPMENT</li>
                                <li>LOCATION</li>
                                <li>REPORT</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </NextUIProvider>
        </>
    )
}

export default Menu_Incidences
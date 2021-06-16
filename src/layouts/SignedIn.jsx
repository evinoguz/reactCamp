import React from 'react'
import { Menu,Image, Dropdown } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
            <Image avatar spaced="right" src='https://react.semantic-ui.com/images/wireframe/square-image.png' circular />
            <Dropdown pointing="top left" text="Evin">
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info"/>
                    <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="sihn-out"/>
                </Dropdown.Menu>


            </Dropdown>
            </Menu.Item>
            
        </div>
    )
}

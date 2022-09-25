import { Navbar, NavbarBrand, NavbarText } from "reactstrap"
import Image from "next/image"

export default function Navibar (){
    return (<Navbar fixed="top" style={{borderBottom:"1px solid #141010"}} container='fluid' color="white" navbar='true'>
            <NavbarBrand >
              <Image alt="school-logo" src="/icon-384x384.png" height={60} width={60}></Image>  
            </NavbarBrand>
            <NavbarText>ثانويه عروه بن الزبير </NavbarText>
            <NavbarBrand>
        <Image alt="logo"src="/moe.png" style={{alignSelf:'right'}}height={60}width={60}/> </NavbarBrand> 

        </Navbar>)
}
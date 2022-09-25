import { Navbar } from "reactstrap"

export default function Footer (){
    return (<Navbar color="dark" style={{borderTop: "1px solid #eaeaea"}} container="fluid" fixed="bottom">
            <a className="btn btn-primary" href="./"> <i className=" fa-solid fa-house"> </i></a>
            <a className="btn btn-danger" href="./announcement"> <i className=" fa-solid fa-bell"> </i></a>
            <a className="btn btn-success" href="./"> <i className=" fa-solid fa-comment"> </i></a>
            <a className="btn btn-warning" href="./calendar"> <i className=" fa-solid fa-calendar-days"> </i></a>
            <a className="btn btn-secondary" href="./"> <i className=" fa-solid fa-circle-user"> </i></a>
            </Navbar>)
}
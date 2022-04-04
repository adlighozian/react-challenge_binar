import "bootstrap/dist/css/bootstrap.min.css";
import {
  React,
  CardBody,
  Card,
  CardImg,
  CardGroup,
  CardTitle,
  CardSubtitle,
  NavLink,
  Button,
} from "reactstrap";
import "./card.css";

function Nava(data) {
  console.log(data.dataCard.post);
  return (
    <>
      {data.dataCard.post.map((todo) => {
        return (
          <div className="py-2">
            <Card>
              <CardImg
                alt="Card image cap"
                src={todo.strDrinkThumb}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">{todo.strDrink}</CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                ></CardSubtitle>
                <NavLink href={`/detail/${todo.idDrink}`}>
                  <Button>Button</Button>
                </NavLink>
              </CardBody>
            </Card>
          </div>
        );
      })}
    </>
  );
}

export default Nava;

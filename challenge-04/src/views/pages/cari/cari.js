import "bootstrap/dist/css/bootstrap.min.css";
import "./cari.css";
import {
  React,
  Card,
  CardGroup,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import Form from "../../partials/form";

function Home() {
  return (
    <>
      <div className="back"></div>
      <div className="bot"></div>
      <Form />
      <CardGroup>
        <div className="box1">
          <Card>
            <CardImg
              alt="Card image cap"
              src="https://picsum.photos/256/186"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              alt="Card image cap"
              src="https://picsum.photos/256/186"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              alt="Card image cap"
              src="https://picsum.photos/256/186"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
      </CardGroup>
    </>
  );
}

export default Home;

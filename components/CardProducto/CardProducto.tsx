import Image from "next/image";
import Link from "next/link";
import styled, { StyledComponent } from "styled-components";
import { Producto } from "../../types/Producto";

const Card: StyledComponent<"li", {}> = styled.li`
  display: flex;
  flex-direction: column;
  width: 215px;
  height: 365px;
  border: 1px solid rgba(0, 0, 0, 0.31);
  border-radius: 13px;
  background-color: rgba(229, 229, 229, 1);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  margin: 15px;
  :hover {
    border: 2px solid #fd9cca;
    cursor: pointer;
  }
  @media (max-width: 500px) {
    height: 240px;
    width: 140px;
  }
`;
const CardImage = styled(Image)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border-radius: 13px 13px 0px 0px;
  z-index: 99;

  @media (max-width: 500px) {
    width: 172px;
    height: 170px;
  }
`;

const CardDescription: StyledComponent<"article", {}> = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 5px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;

  h2 {
    font-size: 16px;
    line-height: 0px;
  }
  h3 {
    font-size: 14px;
    line-height: 0px;
  }
  p {
    font-size: 12px;
  }

  @media (max-width: 500px) {
    height: 85px;
    h2 {
      font-size: 16px;
    }
    h3 {
      font-size: 12px;
    }

    p {
      display: none;
    }
  }
`;

interface CardProductoProps {
  product: Producto;
}

const CardProducto = ({ product }: CardProductoProps): JSX.Element => {
  return (
    <>
      <Card>
        <Link href={`/detail/${product._id}`} passHref>
          <div>
            <CardImage
              src={product.picture}
              alt={product.title}
              width={200}
              height={200}
              layout="responsive"
              objectFit="cover"
            ></CardImage>
            <CardDescription>
              <h2>{product.price} €</h2>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p> {product.category}</p>
            </CardDescription>
          </div>
        </Link>
      </Card>
    </>
  );
};

export default CardProducto;

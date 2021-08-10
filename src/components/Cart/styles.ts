import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 500px;
  max-width: 500px;
  height: auto;
  max-height: 710px;

  background: #fff;
  margin: 0 auto;

  border-radius: 8px;
  filter: drop-shadow(0px 0px 6px #999);

  @media only screen and (max-width: 536px) {
    width: 100%;
  }
`;

export const CartTitle = styled.h1`
  font-size: 22px;
  margin: 16px 0;

  @media only screen and (max-width: 340px) {
    margin-right: auto;
    margin-left: 16px;
  }
`;

export const ProductsList = styled.div`
  width: 100%;
  max-height: 500px;

  padding: 16px;
  border-top: 1px solid #ddd;

  overflow: auto;
`;

export const EmptyCartMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 16px 0;

  & > span {
    margin-top: 8px;
  }

  & > button {
    font-weight: bold;

    margin-top: 8px;
    padding: 8px 32px;

    color: #fff;

    border: none;
    border-radius: 8px;
    background: #48cb95;

    transition: all 200ms ease;

    &:hover {
      background: ${darken(0.1, '#48cb95')};
    }
  }
`;

export const Product = styled.div`
  display: flex;
  margin-bottom: 16px;

  & > svg {
    margin: auto 0;
    cursor: pointer;

    transition: all 200ms ease;

    &:hover {
      transform: scale(1.25);
      color: #e54;
    }

    @media only screen and (max-width: 490px) {
      width: 20px;
      min-width: 20px;
      height: 20px;
      min-height: 20px;
    }
  }
`;

export const Image = styled.img`
  min-width: 100px;
  width: 100px;
  min-height: 100px;
  height: 100px;

  margin-left: 8px;
  border: 1px solid #ccc;
`;

export const DetailsBox = styled.div`
  display: flex;
  flex-direction: column;

  margin: 8px 0 0 16px;
`;

export const ProductTitle = styled.h1`
  font-size: 14px;
  
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media only screen and (max-width: 475px) {
    padding-right: 16px;
  }
`;

export const DiscountPrice = styled.div`
  font-size: 12px;
  margin: 4px 0;

  color: #ada8aa;
`;

export const Price = styled.span`
  font-size: 14px;
  color: #000;
`;

export const TotalBox = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 100%;
  padding: 16px;
  margin-top: auto;

  border-top: 1px solid #ddd;

  & .price-box {
    display: flex;
    justify-content: space-between;
    
    font-weight: bold;
  }
`;

export const FreeShippingMessage = styled.span`
  display: flex;
  justify-content: center;

  background: #c6ffa6;
  border-radius: 16px;

  margin: 8px auto;
  padding: 4px 16px;

  font-weight: 500;
  color: #267f06;
`;

export const FinishBox = styled.div`
  display: flex;

  width: 100%;
  padding: 16px;

  border-top: 1px solid #ddd;


  & > button {
    width: 100%;
    font-weight: bold;

    padding: 16px;

    color: #fff;

    border: none;
    border-radius: 8px;
    background: #5071f2;

    transition: all 200ms ease;

    &:hover {
      background: ${darken(0.1, '#5071f2')};
    }
  }
`;
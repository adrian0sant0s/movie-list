import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem 0;

  .container-movie {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 4rem;
    max-width: 50%;
  }

  img {
    width: 300px;
    border-radius: 1rem;
  }

  h1 {
    margin: 3rem 0;
  }

  span {
    line-height: 30px;
    margin-bottom: 15px;
  }

  .realeaseDate {
    opacity: 0.5;
  }

  button {
    background-image: linear-gradient(to left, #4b0082, #4b0099);
    opacity: 0.8;
    color: #fff;
    border-radius: 15px;
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
    border: none;
    margin-top: 15px;
    cursor: pointer;
  }

  button:hover {
    opacity: 0.9;
  }

  button:active {
    opacity: 1;
  }
`;

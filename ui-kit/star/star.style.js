import styled from 'styled-components';

const StarBox = styled.div`
  display: flex;
  align-items: center;

  .label {
    
  }

  .star {
    display: inline-block;
    margin: 0 3px;
    width: 32px;
    min-height: 32px;
    background: ${props => props.color};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    -webkit-clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    cursor: pointer;

    &.star--image {
      background-image: url(${props => props.image});
    }

    &.star--image.active {
      background-image: url(${props => props.imageActive});
    }
  }

  .star.active {
    background: ${props => props.activeColor};
  }
`

export { StarBox }
import styled from 'styled-components';

const StarBox = styled.div`
  .star {
  display: inline-block;
  margin: 0 7px;
  width: 25px;
  min-height: 25px;
  background: ${props => props.color};
  -webkit-clip-path: polygon(
    0% 50%,
    35% 35%,
    50% 0%,
    65% 35%,
    100% 50%,
    65% 65%,
    50% 100%,
    35% 65%
  );
  cursor: pointer;
}

.star.active {
  background: ${props => props.activeColor}};
}
`

export { StarBox }
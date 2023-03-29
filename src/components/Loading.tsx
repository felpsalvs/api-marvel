

export function Loading() {
  return <Spinner
  'width: 50px;
  height: 50px;
  margin: 0 auto;
  margin-top: 10rem;
  border-radius: 50%;
  border: 5px solid #ffffff;
  border-top: 5px solid #090a1a;
  animation: ${rotate} 800ms linear infinite;' />;
}
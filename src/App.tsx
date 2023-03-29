import { useEffect, useState } from "react";
import { MagnifyingGlass, XCircle } from "phosphor-react";

function App() {
  const [limit, setLimit] = useState("20");
  const [isLoading, setIsLoading] = useState(true);
  const [inputSearchIsOpen, setInputSearchIsOpen] = useState(true);
  const [heroChoosed, setHeroChoosed] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2200);
  }, []);
  return (
    <>
      <Header>
        <Logo src="/logo.png" alt="Logo Marvel" />
      </Header>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <WrapperTitle>
            <title>Welcome, comics lover!</title>
            <LimitArea>
              <SearchArea>
                <TitleSelect htmlFor="limit">Quantity of comics:</TitleSelect>
                <Limit
                  onChange={(event) => {
                    setLimit(event.target.value);
                  }}
                  value={limit}
                  id="limit"
                >
                  {options.map((option) => (
                    <Option key={option}>{option}</Option>
                  ))}
                </Limit>
                <Search isOpen={inputSearchIsOpen}>
                  {inputSearchIsOpen ? (
                    <XCircle
                      size={24}
                      id="closeBtn"
                      onClick={() => {
                        setInputSearchIsOpen(!inputSearchIsOpen);
                        setHeroChoosed("");
                      }}
                      weight="bold"
                      color="red"
                    />
                  ) : (
                    <MagnifyingGlass
                      size={24}
                      id="searchBtn"
                      onClick={() => {
                        setInputSearchIsOpen(!inputSearchIsOpen);
                      }}
                      weight="bold"
                    />
                  )}

                  <InptHero
                    placeholder="Search your hero"
                    onChange={(e) => {
                      setHeroChoosed(e.target.value);
                    }}
                    value={heroChoosed}
                  />
                </Search>
              </SearchArea>
            </LimitArea>
          </WrapperTitle>
          <AllComics limit={limit} hero={heroChoosed} />
        </>
      )}
    </>
  );
}

export default App;
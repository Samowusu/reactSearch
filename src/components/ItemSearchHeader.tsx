import { useRef } from "react";
import AddIcon from "../assets/svgs/AddIcon";
import BookmarkIcon from "../assets/svgs/BookmarkIcon";
import MenuIcon from "../assets/svgs/MenuIcon";
import SearchIcon from "../assets/svgs/SearchIcon";
import { Button } from "./commons/Button";
import { Container } from "./commons/Container";
import { Typography } from "./commons/Typography";

interface ItemSearchHeaderProps {
  onFilter?: () => void;
  setSearchQuery?: (event: string) => void;
  onFetchData?: () => void;
  searchQuery?: string;
  numberOfFilteredItems: number;
}
const ItemSearchHeader = ({
  onFilter,
  setSearchQuery,
  onFetchData,
  numberOfFilteredItems,
}: ItemSearchHeaderProps) => {
  const searchInputRef = useRef<any>(null);

  const handleSearch = (query: string) => {
    searchInputRef?.current && clearTimeout(searchInputRef.current);

    searchInputRef.current = setTimeout(() => {
      setSearchQuery?.(query);
    }, 1000);
    onFetchData?.();
  };

  return (
    <Container padding="15px" style={{ borderBottom: "2px solid #E0E9F7" }}>
      <Container flexDirection="column" gap="10px" width="auto">
        <Typography fontSize="20px" fontWeight="500">
          Item search
        </Typography>
        <Typography fontSize="12px" color="#778FAB">
          {numberOfFilteredItems} items
        </Typography>
      </Container>
      <Container justifyContent="flex-end" gap="20px">
        <Container
          border
          alignItems="center"
          width="auto"
          height="35px"
          borderColor="#D0DAE1"
        >
          <input
            style={{ padding: "5px", border: "none" }}
            placeholder="Search by item #, Order #"
            onChange={(e) => handleSearch(e.target.value)}
            type="search"
            ref={searchInputRef}
          />
          <Container width="20px" height="20px" marginLeft="10px">
            <SearchIcon />
          </Container>
        </Container>
        <Container width="auto" gap="20px">
          <Container width="35px" height="35px">
            <AddIcon />
          </Container>
          <Container width="24px" height="24px">
            <BookmarkIcon />
          </Container>
          <Button width="24px" height="24px" onClick={onFilter}>
            <MenuIcon />
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default ItemSearchHeader;

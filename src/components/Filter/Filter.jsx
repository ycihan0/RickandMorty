import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";
import "./Filter.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Filter = ({ filters, setFilters, setPageNumber }) => {
  const clearFilter = () => {
    setFilters({
      gender: "",
      status: "",
      species: "",
    });
  };
  return (
    <Accordion className="Accordion">
      <AccordionItem className="AccordionItem">
        <AccordionItemHeading className="AccordionItemHeading">
          <AccordionItemButton className="AccordionItemButton">
            Status
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="AccordionItemPanel">
          <Status
            filters={filters}
            setFilters={setFilters}
            setPageNumber={setPageNumber}
          />
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className="AccordionItem">
        <AccordionItemHeading className="AccordionItemHeading">
          <AccordionItemButton className="AccordionItemButton">
            Species
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="AccordionItemPanel">
          <Species
            filters={filters}
            setFilters={setFilters}
            setPageNumber={setPageNumber}
          />
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className="AccordionItem">
        <AccordionItemHeading className="AccordionItemHeading">
          <AccordionItemButton className="AccordionItemButton">
            Gender
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="AccordionItemPanel">
          <Gender
            filters={filters}
            setFilters={setFilters}
            setPageNumber={setPageNumber}
          />
        </AccordionItemPanel>
      </AccordionItem>
      <div onClick={clearFilter} className="filter-clear-button">
        Clear Filters
      </div>
    </Accordion>
  );
};

export default Filter;

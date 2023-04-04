import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

export function SearchForm() {
  return (
    <div>
      <SearchFormContainer>
        <input type="text" placeholder="Filtrar Transação" />
        <button type="submit">
          <MagnifyingGlass size={20}/>
          Buscar
          </button>
      </SearchFormContainer>
    </div>
  );
}

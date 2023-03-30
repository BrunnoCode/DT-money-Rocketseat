import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighlight,
  TransactionContainer,
  TransactionTable,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de Site</td>
              <td>R$ 12.000,00</td>
              <td>Venda</td>
              <td>28/03/2023</td>
            </tr>

            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHighlight variant="outcome">-R$ 59,90</PriceHighlight>
              </td>

              <td>Venda</td>
              <td>28/03/2023</td>
            </tr>

            <tr>
              <td width="50%">Salário</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>28/03/2023</td>
            </tr>

            <tr>
              <td width="50%">Aluguel do Apartamento</td>
              <td>R$ 12.000,00</td>
              <td>Venda</td>
              <td>28/03/2023</td>
            </tr>

            <tr>
              <td width="50%">Computador</td>
              <td>R$ 12.000,00</td>
              <td>Venda</td>
              <td>28/03/2023</td>
            </tr>

            <tr>
              <td width="50%">Cinema</td>
              <td>R$ 12.000,00</td>
              <td>Venda</td>
              <td>28/03/2023</td>
            </tr>

            <tr>
              <td width="50%">Carro</td>
              <td>R$ 12.000,00</td>
              <td>Venda</td>
              <td>28/03/2023</td>
            </tr>

            <tr>
              <td width="50%">Parking</td>
              <td>R$ 12.000,00</td>
              <td>Venda</td>
              <td>28/03/2023</td>
            </tr>

            <tr>
              <td width="50%">Netflix</td>
              <td>R$ 12.000,00</td>
              <td>Venda</td>
              <td>28/03/2023</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  );
}

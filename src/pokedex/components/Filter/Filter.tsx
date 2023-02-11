import { Search } from '@mui/icons-material';
import { IFilter } from '../../interfaces/filter';
import { InputFilter, SrOnlyLabel, WrapperFilter } from './style';

const Filter: React.FC<IFilter> = ({ filter, setFilter }) => {
  const onFilter = (event: any) => {
    const { value } = event.target as unknown as any;
    setFilter(value);
  };

  return (
    <section>
      <WrapperFilter>
        <SrOnlyLabel htmlFor="filter">Filtro de pesquisa</SrOnlyLabel>
        <InputFilter
          type="search"
          name="filter"
          id="filter"
          value={filter}
          onInput={onFilter}
          placeholder="Procurando pelo..."
        />

        <Search />
      </WrapperFilter>
    </section>
  );
};

export default Filter;

import { Input } from '@teable/ui-lib/shadcn';
import { debounce } from 'lodash';
import { useMemo, useState } from 'react';

interface ICollaboratorListProps {
  children?: React.ReactNode | React.ReactNode[];
  inputRight?: React.ReactNode;
  searchPlaceholder?: string;
  onSearch: (search: string) => void;
}

export const CollaboratorList = (props: ICollaboratorListProps) => {
  const { searchPlaceholder, onSearch, children, inputRight } = props;
  const [search, setSearch] = useState<string>('');

  const setApplySearchDebounced = useMemo(() => {
    return debounce(onSearch, 200);
  }, [onSearch]);

  return (
    <div>
      <div className="mb-6 flex items-center gap-x-4">
        <Input
          className="h-8"
          type="search"
          placeholder={searchPlaceholder}
          value={search}
          onChange={(e) => {
            const value = e.target.value;
            setSearch(value);
            setApplySearchDebounced(value);
          }}
        />
        {inputRight}
      </div>
      <div className="mb-0.5 space-y-5">{children}</div>
    </div>
  );
};

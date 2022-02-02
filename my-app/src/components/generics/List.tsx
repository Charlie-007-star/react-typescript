import React from 'react';

type ListProps<T> = {
    items: T[];
    onClick: (value: T ) => void;
}

export const List = <T extends { id: number}>({ items, onClick }: ListProps<T>) => {
  return (
    <React.Fragment>
        <h2>List of Items</h2> 
        {
            items.map((item, index) => {
                return(
                    <div key={item.id} onClick={()=> onClick(item)}>
                        {item}
                    </div>
                )
            })
        }
    </React.Fragment>
  );
};

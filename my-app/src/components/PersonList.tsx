import React from 'react';

type PersonListProps = {
    names: {
        first: string;
        last: string;
    }[];
}

export const PersonList = (props: PersonListProps) => {
  return (
    <React.Fragment>
       <div>
           {
               props.names.map(name =>{
                 return(
                    <h2 key={name.first}>
                        {name.first} {name.last}
                    </h2>
                 );
               })
            }
       </div>
    </React.Fragment>
  );
};

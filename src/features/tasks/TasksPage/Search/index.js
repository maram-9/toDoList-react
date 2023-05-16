import React from "react";
import Input from "../../Input";
import { Wrapper } from "./styled";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter, useReplaceQueryParameter } from "../../../../queryParameter";


export const Search = () => {
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter  = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter ({
            key: searchQueryParamName, 
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <Wrapper>
            <Input 
                placeholder="Filtruj zadania"
                value={query || ""}
                type="text"
                onChange={onInputChange}
            />
        </Wrapper>
    );
};

export default Search;
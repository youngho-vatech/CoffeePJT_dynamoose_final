import React from "react";
import {CreateMutation} from "../../graphql/mutation";
import {useMutation} from "@apollo/react-hooks";
import {CostQuery, CountQuery, MeQuery, NotQuery, OrderSearch, Receipt} from "../../graphql/query";
import Button from "@material-ui/core/Button";

export function CreateOrder(hi) {

    const createmutation = CreateMutation;
    
    const [create] = useMutation(createmutation, {
            refetchQueries: [{query: OrderSearch, variables: {id: String(localStorage.getItem('myData'))}}
                , {query: MeQuery, variables: {userid: String(localStorage.getItem('myData'))}},
                {query: Receipt}, {query: CountQuery}, {query: CostQuery}, {query: NotQuery}],
            variables: {
                id: String(localStorage.getItem('myData')),
                menu: hi.menu,
                hi: hi.hi
            },
            onCompleted: () => {
            },
            onError: (error) => {
                console.log(typeof(localStorage.getItem('myData')))
                alert(typeof(localStorage.getItem('myData')))
            },
        }
    )

    return (
        <>
            <Button
                type='submit'
                color={hi.color}
                onClick={create}>
                {hi.label}
            </Button>
        </>


    )
}

export default CreateOrder;
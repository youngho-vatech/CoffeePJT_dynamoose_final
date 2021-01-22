import {useMutation} from "@apollo/react-hooks";
import {
    BackUserMutation, CreateMutation,
    CreateUserMutation,
    getBackGiveup, multipleDelete, OrderBackMutation,
    OrderGiveupMutation,
    RemoveMutation, TaskCreateMutation,
    TaskRemoveMutation, UpdateUserMutation
} from "./mutation";
import {
    CostQuery,
    CountQuery,
    MeQuery, NotQuery,
    Ordermen,
    OrderSearch,
    Receipt,
    TaskQuery,
    UserSearchQuery,
    VacationQuery
} from "./query";
import React from "react";

//주문 포기=> 재주문 상태로
export function ChangeGiveup(userid) {

    const [giveup] = useMutation(getBackGiveup, {
            refetchQueries: [{query: OrderSearch, variables: {id: localStorage.getItem('myData')}}
                , {query: MeQuery, variables: {userid: localStorage.getItem('myData')}},
                {query: Receipt}, {query: CountQuery}, {query: CostQuery}, {query: NotQuery}],
            variables: {
                id: userid.userid
            },
            onCompleted: () => {
                window.location.href = '/order';
            }
        }
    )

    return giveup
}


//주문 생성

export function CreateOrder(hi) {
    const createmutation = CreateMutation;


    const [create] = useMutation(createmutation, {
            refetchQueries: [{query: OrderSearch, variables: {id: localStorage.getItem('myData')}}
                , {query: MeQuery, variables: {userid: localStorage.getItem('myData')}},
                {query: Receipt}, {query: CountQuery}, {query: CountQuery}, {query: NotQuery}],
            variables: {
                id: localStorage.getItem('myData'),
                menu: hi.menu,
                hi: hi.hi
            },
            onCompleted: () => {
            },
            onError: () => {
                alert("메뉴를 선택해주세요.")
            },
        }
    )

    return create;


}

//주문 삭제
export function DeleteOrder(userid) {


    const [deletePostOrMutation] = useMutation(RemoveMutation, {
            refetchQueries: [
                {query: OrderSearch, variables: {id: localStorage.getItem('myData')}}
                , {query: MeQuery, variables: {userid: localStorage.getItem('myData')}},
                {query: Receipt}, {query: CountQuery}, {query: CostQuery}, {query: CountQuery}, {query: NotQuery}],
            variables: {
                userid: userid.userid,
                orderid: userid.orderid
            },
            onError: () => {
                // alert("주문이 취소되었습니다!")
            }
        }
    )
    return deletePostOrMutation;
}


//주문 포기
export function Giveup(userid) {

    const [giveup] = useMutation(OrderGiveupMutation, {
            refetchQueries: [{query: OrderSearch, variables: {id: localStorage.getItem('myData')}}
                , {query: MeQuery, variables: {userid: localStorage.getItem('myData')}},
                {query: Receipt}, {query: CountQuery}, {query: CostQuery}, {query: CountQuery}, {query: NotQuery}],
            variables: {
                userid: userid.userid
            },
            onCompleted: () => {
            }
        }
    )

    return giveup;
}


//주문 생성

export function TaskCreate() {
    const [create] = useMutation(TaskCreateMutation, {
            refetchQueries: [{query: TaskQuery}],
            variables: {
                title: localStorage.getItem('task'),
                userid: localStorage.getItem('myData')
            },

            onError: () => {
            },
        }
    )
    return create
}


//주문 재작성
export function TaskDelete(post_id, user_id) {

    const [deletemutation] = useMutation(TaskRemoveMutation, {
            refetchQueries: [{query: TaskQuery}, {query: Receipt}],
            variables: {id: post_id.post_id, userid: post_id.user_id},
            onCompleted: () => {
                localStorage.removeItem('task');
                alert("주문 재작성 페이지로 돌아갑니다!");
            }
        }
    )
    return deletemutation;
}


//유저 생성

export function UserAdd(username, content, setOpen) {

    const [create] = useMutation(CreateUserMutation, {
            refetchQueries: [{query: UserSearchQuery}, {query: Receipt}, {query: CountQuery}, {query: NotQuery}],
            variables: {
                username: content
            },
            onCompleted: () => {
                alert("유저 추가가 완료되었습니다.")
                setOpen(false);

            },
            onError: () => {
                alert("같은 이름은 등록하실 수 없습니다!")
            },
        }
    )

    return create
}

//유저 삭제

export function UserDelete(post_id) {

    const [deleteMutation] = useMutation(multipleDelete, {
            refetchQueries: [{query: OrderSearch, variables: {id: localStorage.getItem('myData')}}
                , {query: MeQuery, variables: {userid: localStorage.getItem('myData')}},
                {query: Receipt}, {query: CountQuery}, {query: CostQuery}, {query: NotQuery}],
            variables: {ids: [String(Object.values(post_id))]},
            onCompleted: () => {
                alert("유저 삭제가 완료되었습니다.")
            },
            onError: () => {
                alert("다시 시도해주세요!")
            }
        }
    )

    return deleteMutation;
}

//다수의 유저 삭제
export function MultipleUserDelete(checked) {
    const [mdelete] = useMutation(multipleDelete, {
            refetchQueries: [{query: UserSearchQuery},
                {query: MeQuery, variables: {userid: localStorage.getItem('myData')}},
                {query: Receipt}, {query: CountQuery}, {query: CostQuery}, {query: CountQuery}, {query: NotQuery}],
            variables: {ids: checked.map((c) => (c._id))},
            onCompleted: () => {
                alert("선택하신 유저가 삭제되었습니다.");
            },
            onError: () => {
                alert("다시 시도해주세요!")
            }
        }
    )

    return mdelete;
}

//유저 정보 업데이트
export function UpdateUser(checked, content, setOpen) {
    const [update] = useMutation(UpdateUserMutation, {
            refetchQueries: [{query: UserSearchQuery},
                {query: MeQuery, variables: {userid: localStorage.getItem('myData')}},
                {query: Receipt}, {query: CostQuery}, {query: CountQuery}, {query: NotQuery}],
            variables: {
                id: checked.map((c) => (c._id)).toString(),
                username: content
            },
            onCompleted: () => {

                alert("정보 수정이 완료되었습니다.")
                setOpen(false);
            },
            onError: () => {
                alert("다시 시도해주세요!")
            }
        }
    )

    return update

}

//유저 정보 선택적 업데이트
export function SelectUpdate(username, content, setClick) {

    const mutation = UpdateUserMutation;

    const [update] = useMutation(mutation, {
            refetchQueries: [{query: OrderSearch, variables: {id: localStorage.getItem('myData')}}
                , {query: MeQuery, variables: {userid: localStorage.getItem('myData')}}], variables: {
                id: username.id,
                username: content
            },
            onCompleted: () => {

                alert("정보 수정이 완료되었습니다.")
                setClick(false)

            }
        }
    )
    return update
}


//선택적 수정
export function DUpdateUser(username, content, setOpen) {
    const [update] = useMutation(UpdateUserMutation, {
            refetchQueries: [{query: UserSearchQuery},
                {query: MeQuery, variables: {userid: localStorage.getItem('myData')}}],
            variables: {
                id: username.id,
                username: content
            },
            onCompleted: () => {
                alert("정보 수정이 완료되었습니다.")
                setOpen(false);
            },
            onError: () => {
                alert("다시 시도해주세요!")
            }
        }
    )

    return update
}


//주문자 => 미주문자로
export function VacationBack(checked) {
    const [vacationback] = useMutation(BackUserMutation, {
            refetchQueries: [{query: Ordermen}, {query: VacationQuery}],
            variables: {ids: checked.map((c) => (c._id))},
            onCompleted: () => {
                alert("미주문자로 전환되었습니다!");

            }
        }
    )
    return vacationback;
}


//미주문자 => 주문자로
export function OrderBack(checked) {
    const [orderback] = useMutation(OrderBackMutation, {
            refetchQueries: [{query: Ordermen}, {query: VacationQuery}],
            variables: {ids: checked.map((c) => (c._id))},
            onCompleted: () => {

                alert("주문자로 전환되었습니다!");

            }
        }
    )
    return orderback;
}


export default {
    ChangeGiveup, DeleteOrder, Giveup,
    TaskDelete, TaskCreate,
    UserAdd, UserDelete, MultipleUserDelete, UpdateUser, SelectUpdate,
    VacationBack, OrderBack
};
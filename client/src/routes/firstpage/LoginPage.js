import React, {useEffect, useState} from 'react';
import {useQuery} from "@apollo/react-hooks";
import {SearchQuery, TaskQuery} from "../../graphql/query";
import {createUseStyles, useTheme} from "react-jss";
import '../../components/table/table.css';
import {Autocomplete} from "@material-ui/lab";
import {TextField} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = createUseStyles((theme) => ({

        loginwrap: {
            color: "white",
            fontWeight: "lighter",
            textAlign: "center",
            paddingTop: "10px",
            width: "100%",
            margin: "none",
            maxWidth: "525px",
            minHeight: "300px",
            position: "relative",

        },
        loginhtml: {
            width: "100%",
            height: "100%",
            position: "center",
            marginLeft: "150px",
            marginTop: "-50px",
            padding: "80px 70px 50px 70px",
            backgroundColor: theme.color.red,

        },

        h3: {
            color: "white",
            marginBottom: "30px",
            textAlign: "center",
            marginTop: "40px"
        },
        h5: {
            color: "white",
            padding: "30px 30px 30px 30px",
            marginBottom: "30px",
            fontWeight: "bolder",
            textAlign: "center"
        },
        loginform: {
            minHeight: "345px",
            position: "relative",
            perspective: "1000px",
            transformStyle: "preserve-3d"

        },

        loginafter: {
            marginTop: "50px",
            minHeight: "200px",
            position: "relative",
            perspective: "1000px",
            transformStyle: "preserve-3d",
            backgroundColor: "rgb(42,47,34,0.9)"
        },

        group: {
            marginBottom: "15px",
            '&:nth-child(n) > TextField,label,input,button,a,table': {
                width: "100%",
                color: "#fff",
            },
            '&:nth-child(n) > TextField,input,button,table,tr': {
                border: "none",
                padding: "15px 20px",
                borderRadius: "25px",
                background: "rgba(255,255,255,.1)",
                textAlign: "center",
                alignContent: "center"
            },
            '&:nth-child(n) > TextField': {
                outline: "none",
            },

            '&:nth-child(n) > tr,td, TextField': {
                width: "50%",
                padding: "15px 60px",
                alignContent: "center",
                marginTop: 10,
                border: "none",
                margin: "20px",
            },

            '&:nth-child(n) > button': {
                marginTop: "50px",
                border: "none",
                padding: "50px 50px",
                borderRadius: "25px",
                background: "rgba(255,255,255,.1)",
                width: "100%",
                color: "#fff",
                display: "block"
            },
            '&:nth-child(n) > label ': {
                color: "#aaa",
                fontSize: "12px"
            },
            palette: {
                primary: {
                    main: 'rgba(255,255,255,.1)',
                },
                secondary: {
                    main: '#030303',
                },
            },
        }
    }))
;

const handleClick = (name, id) => {
    if (id !== undefined && id !== null) {
        localStorage.setItem('myData', id.toString())
        localStorage.setItem('name', name)
        window.location.href = '/order'
    }

}


const AuthenticationForm = () => {

    const theme = useTheme();
    const classes = useStyles({theme});

    const [result, setResult] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [value, setValue] = useState('');
    const [tasks, setTasks] = useState("");
    const [o, setO] = useState("");

    const {data: task} = useQuery(TaskQuery);

    const {data} = useQuery(SearchQuery, {
        variables: {
            word: inputValue
        },

    });

    const {data: one} = useQuery(SearchQuery, {
        variables: {
            word: value
        }
    })

    useEffect(() => {
        if (data) {
            setResult(data.user);
        }
        if (task) {
            setTasks(task.tasks);
        }
        if (one) {
            setO(one.user);
        }
    }, [data, task, one]);
    
    return localStorage.getItem('name') ? (
        <div className={classes.root}>
            <div className={classes.loginwrap}>

                <div className={classes.loginhtml}>
                    <h3>이름을 찾을 수 없습니다.</h3>

                    <h5 className={classes.h5}>재입력해주시거나 <br/> 결제자에게 문의해주세요!</h5>

                    <div className={classes.loginform}>

                        <div className={classes.group}>
                            <label>주문자</label>
                            <Typography component="div" variant="body1">

                                <Autocomplete
                                    freeSolo
                                    id="free-solo-2-demo"
                                    disableClearable
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                    options={result.map((content) => content.username)}
                                    inputValue={inputValue}
                                    onInputChange={(event, newInputValue) => {
                                        setInputValue(newInputValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            id="standard-basic"
                                            margin="normal"
                                            color={"secondary"}
                                            InputProps={{
                                                ...params.InputProps,
                                                type: 'search',
                                                className: classes.focused
                                            }}
                                            onKeyDown={({key}) => {
                                                if (key === "Enter" && value !== undefined && value !== '') {
                                                    handleClick(value, o.map((content) => (content._id)))
                                                }
                                            }}
                                        />
                                    )}
                                />
                            </Typography>

                            <Button type="submit"
                                    disabled={inputValue === undefined}
                                    onClick={() => handleClick(value, o.map((content) => (content._id)))}
                            >로그인</Button>

                        </div>


                    </div>
                </div>
            </div>
        </div>


    ) : (
        <div className={classes.root}>
            <div className={classes.loginwrap}>

                <div className={classes.loginhtml}>
                    {tasks && tasks.map((task) => (
                        <h3 key={task}>{task.creater}님의 주문이 진행 중입니다.</h3>
                    ))}
                    <h5 className={classes.h5}>주문하시려면<br/>로그인해주세요!</h5>

                    <div className={classes.loginform}>

                        <div className={classes.group}>
                            <label>주문자</label>
                            <Typography component="div" variant="body1">

                                <Autocomplete
                                    freeSolo
                                    id="free-solo-2-demo"
                                    disableClearable
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                    options={result.map((content) => content.username)}
                                    inputValue={inputValue}
                                    onInputChange={(event, newInputValue) => {
                                        setInputValue(newInputValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            id="standard-basic"
                                            margin="normal"
                                            color={"secondary"}
                                            onKeyDown={({key}) => {
                                                if (key === "Enter" && value !== undefined && value !== '') {
                                                    handleClick(value, o.map((content) => (content._id)))
                                                }
                                            }}
                                            InputProps={{
                                                ...params.InputProps,
                                                type: 'search',
                                                className: classes.focused
                                            }}
                                        />
                                    )}
                                />
                            </Typography>

                            <Button type="submit"
                                    disabled={inputValue === undefined}
                                    onClick={() => handleClick(value, o.map((content) => content._id))}
                            >로그인</Button>

                        </div>


                    </div>
                </div>
            </div>
        </div>

    );
};

export default AuthenticationForm;
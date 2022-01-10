import { UserInfo } from "../../components/login";
import { useContext, useState } from "react";
import { useForm } from "../../utils/use-form";
import { API } from "../../utils/constants";
import './add-feedback.scss';
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, InputLabel, MenuItem, Select, TextField } from "@mui/material";


export function AddFeedback() {
    const currenUserInfo = useContext(UserInfo);
    const [formValues, formProps] = useForm({
        firstname:'',
        lastname: '',
        subject: '',
        email:'',
        vote: '',
        message: ''
    })
    const [feedback, setFeedback] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        setFeedback(null)
        fetch(`${API}/feedback`, {
            method: 'post',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(formValues)
        })
            .then(() => setFeedback('Feedback saved.'))
            .catch(() => setFeedback('Feedback cannot be save.'))
    }


    if (currenUserInfo.isAdmin) {
        return (
            <div>
                Admin cannot add the feedback!
            </div>
        )
    }

    return (
        <form className={'AddFeedbackForm'} onSubmit={handleSubmit}>
            <TextField label={'Firstname'} type="text" {...formProps.firstname} />
            <TextField label={'Lastname'} type="text" {...formProps.lastname} />
            <TextField label={'Subject'} type="text" {...formProps.subject} />
            <TextField label={'E-mail'} type="email" {...formProps.email} />
            <TextField label={'Message'} type="text" {...formProps.message} />
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Vote</InputLabel>
                <Select
                    label="Vote"
                    {...formProps.vote}
                >
                    <MenuItem value={'like'}>Like</MenuItem>
                    <MenuItem value={'dislike'}>Dislike</MenuItem>
                    <MenuItem value={'suggestion'}>Suggestion</MenuItem>
                </Select>
            </FormControl>


            <div>
                <Button variant="contained" type={'submit'}>Send</Button>
            </div>
            {feedback && (
                <div>{feedback}</div>
            )}
        </form>
    )

}

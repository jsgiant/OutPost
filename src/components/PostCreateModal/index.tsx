import React, { useState } from "react";
import Modal from 'react-modal'

import {VacationTypes} from '../../constants/UIConstants'
import { getToken } from "../../utils/storageUtils";

import Input from "../common/Input"

import { ErrorMessage, SubmitButton } from "./styledComponents";

const PostCreateModal = () => {
    const [name, setName] = useState('')
    const [duration, setDuration] = useState({from: '', to: ''})
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [type, setType] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const onChangeStartDuration = (value: string) => {
        setDuration({...duration, from: value})
    }

    const onChangeEndDuration = (value: string) => {
        setDuration({...duration, to: value})
    }

    const addTravel = async() => {
        setErrorMsg("");
        setIsLoading(true);
        await fetch(
        "https://hackout.hafeezulkareem.repl.co/travel",
        {
            method: "POST",
            body: JSON.stringify({ name, duration, from, to, type }),
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${getToken()}`}
        }
        )
        .then((response) => response.json())
        .then((data) => {
            if (!data.success) {
                throw new Error(data.message)
            }
        })
        .catch((error) => {
            setErrorMsg(error.message)
        }).finally(() => {
            setIsLoading(false)
        });
    }

    return <Modal isOpen={false} style={{content: {width: 'fit-content', height: 'fit-content', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}}>
        <div>
            <Input placeholder="Vacation name" value={name} onChangeValue={setName} isRequired/>
        </div>
        <div>
            <p>Vacation Duration</p>
            <Input placeholder="Vacation start date (DD/MM/YYYY)" value={duration.from} onChangeValue={onChangeStartDuration}/>
            <Input placeholder="Vacation end date (DD/MM/YYYY)" value={duration.to} onChangeValue={onChangeEndDuration}/>
        </div>
        <div>
            <p>Vacation Location</p>
            <Input placeholder="From location" value={from} onChangeValue={setFrom}/>
            <Input placeholder="To location" value={to} onChangeValue={setTo}/>
        </div>
        <div>
            <p>Vacation Type</p>
            <div>
                <label>
                    <input name="vacationType" type="radio" value={VacationTypes.single} checked={type === VacationTypes.single} onChange={()=>setType(VacationTypes.single)} /> Single
                </label>
                <label>
                    <input name="vacationType" type="radio" value={VacationTypes.family} checked={type === VacationTypes.family} onChange={() => setType(VacationTypes.family)} /> Family
                </label>
            </div>
        </div>
        {errorMsg?<ErrorMessage>{errorMsg}</ErrorMessage>:null}
        <SubmitButton onClick={addTravel} disabled={isLoading}>
            Submit
        </SubmitButton>
    </Modal>
}

export default PostCreateModal
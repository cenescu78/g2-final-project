import { UserInfo } from "../../components/login";
import { useContext, useState } from "react";
import { useForm } from "../../utils/use-form";
import { API } from "../../utils/constants";
import './add-product.scss'

export function AddProduct() {
    const currenUserInfo = useContext(UserInfo);
    const [formValues, formProps] = useForm({
        name: '',
        slug: '',
        weight: 0,
        color: ''
    })
    const [message, setMessage] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        setMessage(null)
        fetch(`${API}/products`, {
            method: 'post',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(formValues)
        })
            .then(() => setMessage('Produs creat'))
            .catch(() => setMessage('Produsel nu a putut fi adaugat'))
    }


    if (!currenUserInfo.isAdmin) {
        return (
            <div>
                You don't have access to admin dashboard
            </div>
        )
    }

    return (
        <form className={'AddProductForm'} onSubmit={handleSubmit}>
            <label>
                Nume:
                <input type="text" {...formProps.name} />
            </label>
            <label>
                Slug:
                <input type="text" {...formProps.slug} />
            </label>
            <label>
                Weight:
                <input type="number" {...formProps.weight} />
            </label>
            <label>
                color:
                <select {...formProps.color}>
                    <option value="">Please select a color</option>
                    <option value="red">Red</option>
                    <option value="black">Black</option>
                    <option value="yellow">Yellow</option>
                </select>
            </label>
            <div>
                <button type={'submit'}>Adauga</button>
            </div>
            {message && (
                <div>{message}</div>
            )}
        </form>
    )

}

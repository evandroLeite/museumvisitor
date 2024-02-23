// const TelaLogin = () => {
//     return (
//         <>
//             <h1>Login</h1>
//         </>
//     );
// }


// export default TelaLogin;

import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const TelaLogin = () => {
    const { control, handleSubmit, formState:{errors} } = useForm();
    // const { control, handleSubmit, -> formState:{errors} <- } = useForm();

    const onSubmit = (data) => {
    console.log(data);
    };

    return (
    <form>
    <label>
        Nome:
        <Controller
            name="nome"
            control={control}
            render={({ field }) => <input {...field} />}
            required={true}
        />
        {/* {errors.nome.type === "required" && (<p>deu erro</p>) } */}
    </label>

    <label>
        CPF:
        <Controller
            name="cpf"
            control={control}
            render={({ field }) => <input {...field} />}
        />
    </label>

    <label>
        Endereço:
        <Controller
            name="endereco"
            control={control}
            render={({ field }) => <input {...field} />}
        />
    </label>

    <label>
        Gênero:
        <Controller
            name="genero"
            control={control}
            render={({ field }) => <input {...field} />}
        />
    </label>

    <label>
        Cidade:
        <Controller
            name="cidade"
            control={control}
            render={({ field }) => <input {...field} />}
        />
    </label>

    <label>
        Bairro:
        <Controller
            name="bairro"
            control={control}
            render={({ field }) => <input {...field} />}
        />
    </label>

        <button onClick={() => handleSubmit(onSubmit)()} type="button">Enviar</button>
    </form>
    );
};

export default TelaLogin;

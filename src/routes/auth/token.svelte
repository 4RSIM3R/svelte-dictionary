<script>
    import {
        getAuth,
        GoogleAuthProvider,
        signInWithPopup,
    } from "firebase/auth";

    import { app } from "../../utils/auth_utils";

    let token = "";

    const loginWithGoogle = () => {
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then((value) => {
            token = value.user.accessToken;
        });
    };

    const copyToken = () => {
        navigator.clipboard.writeText(token);
    };
</script>

<div
    class="min-h-screen max-w-sm flex flex-col justify-center items-center space-y-8"
>
    <button on:click={loginWithGoogle}> Get Token Here </button>
    <button on:click={copyToken}> Copy Token </button>
</div>

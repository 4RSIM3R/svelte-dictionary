<script>
    const onSuccessHandler = () => {};

    const onFailureHandler = (e) => {
        console.error("gauth initialisation error", e.details);
    };

    function onLoadGoogleAuthClient() {
        gapi.load("auth2", async () => {
            let result = gapi.auth2.init({
                client_id:
                    "793620766164-jld7qf3h95vcu1488cvo72fgcgigit43.apps.googleusercontent.com",
            });
            result.then(onSuccessHandler, onFailureHandler);
        });
    }

    function initGoogleAuthClient(node) {
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://apis.google.com/js/api:client.js";
        document.head.append(script);
        script.onload = onLoadGoogleAuthClient;
    }
</script>

<button use:initGoogleAuthClient> Login Here </button>

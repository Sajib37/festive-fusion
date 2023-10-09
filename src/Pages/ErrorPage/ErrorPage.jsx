const ErrorPage = () => {
    return (
        <div className="w-full h-[100vh] flex flex-col justify-center gap-4">
            <h1 className="text-3xl md:text-5xl font-bold text-red-800 text-center">Opps!! Page Not Found</h1>
            <h2 className="text-xl md:text-3xl font-bold text-center">Provided route is not correct</h2>
        </div>
    );
};

export default ErrorPage;
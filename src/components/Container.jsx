
const Container = ({children}) => {
    return (
        <div className="max-w-[1340px] mx-auto xl:px-16 lg:px-8 md:px-4 sm:px-2 p-4">
            {children}
        </div>
    );
};

export default Container;
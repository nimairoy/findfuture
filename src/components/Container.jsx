
const Container = ({children}) => {
    return (
        <div className="max-w-[1240px] mx-auto xl:px-20 lg:px-10 md:px-4 sm:px-2 p-4">
            {children}
        </div>
    );
};

export default Container;
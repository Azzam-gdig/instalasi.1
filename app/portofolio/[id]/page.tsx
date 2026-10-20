const portofolio = [
    { id: 1, title: 'Project 1' },
    { id: 2, title: 'Project 2' },
    { id: 3, title: 'Project 3' },
];

const portofoliopage = async ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const porto = portofolio.find((item) => item.id === Number(id));

    return (
        <div>
            <h1 className="text-3xl text-white text-center">Portofolio</h1>
            <p>{porto ? porto.title : 'Portfolio not found'}</p>
            <p>{id}</p>
        </div>
    );
};

export default portofoliopage;
            
export default function Pagination({ page, lastPage, setPage }) {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  return (
    <div className="flex items-center justify-center gap-4 px-2 py-4 text-2xl text-color-primary">
      {page <= 1 ? null : (
        <button
          onClick={handlePrevPage}
          className="px-4 py-2 transition-all border rounded hover:bg-color-orange hover:text-white border-color-primary"
        >
          Prev
        </button>
      )}

      <p>
        {page} dari {lastPage}
      </p>

      {page >= lastPage ? null : (
        <button
          onClick={handleNextPage}
          className="px-4 py-2 transition-all border rounded hover:bg-color-orange hover:text-white border-color-primary"
        >
          Next
        </button>
      )}
    </div>
  );
}

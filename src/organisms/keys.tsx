export const Keys = () => {
  return (
    <div className="mt-10">
      <div className="mt-5">
        <p className="mt-3">
          GPG Keys: Available on{' '}
          <a
            href={'https://keys.openpgp.org/search?q=me%40m1sk9.dev'}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            keys.openpgp.org
          </a>
        </p>
        <p className="mt-3">
          SSH Keys: Available on{' '}
          <a
            href={'https://github.com/m1sk9.keys'}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
};

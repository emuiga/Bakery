export function ContentfulSetupNotice() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="text-5xl mb-4">🥐</p>
        <h1 className="font-serif text-3xl text-[#2C1810] mb-3">
          Bakery site not yet configured
        </h1>
        <p className="text-gray-600 leading-relaxed mb-6">
          Add your <code className="bg-gray-100 px-1 rounded">CONTENTFUL_SPACE_ID</code> and{" "}
          <code className="bg-gray-100 px-1 rounded">CONTENTFUL_ACCESS_TOKEN</code> to{" "}
          <code className="bg-gray-100 px-1 rounded">.env.local</code> and restart the dev server.
        </p>
        <p className="text-sm text-gray-400">
          See <strong>CONTENTFUL_SETUP.md</strong> for instructions on creating the content models.
        </p>
      </div>
    </div>
  );
}

import { useCallback, useEffect, useState } from "react"

const useAsync = (callback, dependencies= []) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const [value, setValue] = useState()

  const callbackMemoiezed = useCallback(() => {
    setLoading(true)
    setError(undefined)
    setValue(undefined)

    callback()
    .then(setValue)
    .catch(setError)
    .finally(() => setLoading(false))
  }, dependencies)

  useEffect(() => {
     callbackMemoiezed()
  }, [callbackMemoiezed])

  return { loading, error, value }
}

export default useAsync

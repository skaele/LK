export const downloadFile = async (file: File) => {
    const downloadUrl = window.URL.createObjectURL(new Blob([file]))
    const link = document.createElement('a')
    link.href = downloadUrl
    link.setAttribute('download', file.name)
    document.body.appendChild(link)
    link.click()
}

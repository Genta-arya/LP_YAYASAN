import DOMPurify from 'dompurify';

// Helper untuk strip tag HTML dan potong teks
const truncateHTMLContent = (htmlString, maxLength = 100) => {
  const plainText = htmlString.replace(/<[^>]+>/g, ""); // hapus tag HTML
  const truncated = plainText.length > maxLength
    ? plainText.slice(0, maxLength) + "......"
    : plainText;
  return DOMPurify.sanitize(truncated); // bersihin untuk keamanan
};

export default truncateHTMLContent;
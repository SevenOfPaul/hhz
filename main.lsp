(defvar hello "hello")
(defvar world "world!")
(defun contact (s1 s2)
(
   lambda (s1 s2) (concatenate 'string s1 " " s2)
))
(write (contact hello world))
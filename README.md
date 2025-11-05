# Framer motion haqida o'rgangan bilimlarimni shu loyihada sinab kormoqchiman.

motion dizayn bu har bir elementni qaysi vaqtda qanday harakatlanishini vaqt mintaqasi va ekran joylashuviga qarab uni korsatib berish kerak bolgan kutubxona


## uning ichida motion objectni destructuring qilib olib hohlagan tagni yoniga qo'shimcha qilib uni qo'shib ishlatsak bo'ladi.


mabodo elementni qayerda joylashni bilmasak. uni


```
initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: "2.5rem", marginBottom: "10px" }}
```
shunday codelar orqali chiqarib olish mumkin        
rmdir bin /s /q
mkdir bin
npx babel src/ --out-dir=bin/ --retain-lines --watch
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import UI from './config/ui.config';
import { validate } from './helpers/validate';
import { showInputError, removeInputError } from './views/form';
import { login } from './services/auth.service';
import { notify } from './views/notification';
import { getNews} from './services/news.service';

const { form, inputEmail, inputPassword } = UI;
const inputs = [inputEmail, inputPassword];

//Events
form.addEventListener('submit', (e) => {
	e.preventDefault();
	onSubmit();
});

inputs.forEach((el) => el.addEventListener('focus', () => removeInputError(el)));

///Handlers
async function onSubmit() {
	const isValidForm = inputs.every((el) => {
		removeInputError(el);
		const isValidInput = validate(el);
		if (!isValidInput) {
			showInputError(el);
		}
		return isValidInput;
	});
	console.log(isValidForm);

	if (!isValidForm) return;

	try {
		await login(inputEmail.value, inputPassword.value);
		await getNews();
		form.reset();
		//show success notify
		notify({ mas: "Login success", className: "alert-success" })
	} catch (err) {
		notify({ mas: "Login faild", className: "alert-danger" })
	}
}



